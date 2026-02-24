import { useState } from "react";
import { Mail, Zap, Loader2 } from "lucide-react";

interface LoginPageProps {
  onLogin: (email: string) => Promise<void>;
}

export function LoginPage({ onLogin }: LoginPageProps) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address");
      return;
    }

    try {
      setLoading(true);
      setError(null);
      await onLogin(email);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to log in");
      setLoading(false);
    }
  };

  return (
    <div className="h-dvh bg-[#41563f] from-blue-600 via-blue-700 to-blue-800 grid-rows-1 grid grid-cols-1 md:grid-cols-2 items-center justify-items-center p-4 overflow-hidden">
      <div className="bg-[#f8fbf2] rounded-3xl shadow-2xl p-8 md:p-12 max-w-md w-full z-10">
        <img src="./img/giroderigoweb.webp" alt="Logo" className="" />
        <div className="flex items-center justify-center mb-8"></div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#41563F]" />
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Ingrese su correo electrónico"
                className="font-montserrat w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl text-400 focus:outline-none focus:ring-1 focus:ring-[#41563F] focus:border-transparent transition-all text-[#41563F] placeholder-[#41563F]"
                disabled={loading}
                required
              />
            </div>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-sm text-red-600">{error}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#41563F] hover:from-[#2a4833] hover:to-[#1f3626] text-white font-black py-4 px-6 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 italic uppercase tracking-widest"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Iniciando sesion...
              </>
            ) : (
              <p className="uppercase font-montserrat not-italic">Continuar</p>
            )}
          </button>
        </form>
        <img className="pt-4" src="./img/giroderigoweb_.webp" alt="" />
      </div>
      <img src="./img/inicio.webp" alt="" />
      <div className=" inset-0 overflow-hidden"></div>
    </div>
  );
}
