import MainLayout from "@/layout/MainLayout";
import LoginForm from "@/components/auth/LoginForm";

export default function Login() {
  return (
    <MainLayout>
      <section className="flex flex-col items-center justify-center min-h-screen gradient-bg-blue px-6 py-24">
        <LoginForm />
      </section>
    </MainLayout>
  );
}
