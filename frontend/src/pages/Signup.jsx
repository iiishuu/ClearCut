import MainLayout from "@/layout/MainLayout";
import SignupForm from "@/components/auth/SignupForm";

export default function Signup() {
  return (
    <MainLayout>
      <section className="flex flex-col items-center justify-center min-h-screen gradient-bg-blue px-6 py-24">
        <SignupForm />
      </section>
    </MainLayout>
  );
}