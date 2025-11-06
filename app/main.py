import mimetypes
import tempfile, os, uuid
from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from rembg import remove, new_session
from io import BytesIO
import base64


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # en développement : autorise tout
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

MAX_FILE_SIZE = 10 * 1024 * 1024  # 10 MB

session = new_session("u2net", providers=["CUDAExecutionProvider", "CPUExecutionProvider"])

@app.post("/remove-background")
async def remove_background(file: UploadFile = File(...)):
    if file.content_type not in ["image/png", "image/jpeg", "video/mp4", "video/webm"]:
        raise HTTPException(status_code=400, detail="Invalid File Format")
    if file.content_type in ["image/png", "image/jpeg"]:
        return await remove_background_file(file)
    else:
        return await remove_background_video(file)

async def remove_background_file(file: UploadFile = File(...)):
    image = await file.read()
    if len(image) > MAX_FILE_SIZE:
        raise HTTPException(status_code=413, detail="File is Too Large (Max 10MB)")
    if not image:
        raise HTTPException(status_code=400, detail="Empty File")
    result = remove(image, session=session)
    encoded_image = base64.b64encode(result).decode('utf-8')
    return JSONResponse(content={"image_base64": encoded_image})

async def remove_background_video(file: UploadFile = File(...)):
    type = mimetypes.guess_extension(file.content_type) 
    temp_path = os.path.join(tempfile.gettempdir(), f"{uuid.uuid4()}{type}")
    with open(temp_path, "wb") as f:
        f.write(await file.read())
      