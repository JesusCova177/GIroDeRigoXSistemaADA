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
    <div className="h-dvh bg-[#41563F] from-blue-600 via-blue-700 to-blue-800 flex items-center justify-center p-4 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400 rounded-full opacity-10 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-400 rounded-full opacity-10 blur-3xl" />
      </div>

      <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-md w-full relative z-10">
        <div className="flex items-center justify-center mb-8">
         
        </div>
 <h1 className="text-2xl text-[#F8A3C9] block self-center justify-self-center text-center tracking-wide">
            Roadmap de Alimentación Giro de Rigo 2026 by <span className="text-black">SISTEMA</span><span className="text-[#ffcc00]">ADA</span>
            </h1>
        <h2 className="text-xl font-titling font-black text-white text-center mb-3 italic uppercase tracking-tight tracking-wide">
         Inicio de sesion
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-black-700 mb-2"
            >
              correo electronico
            </label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@correo.com"
                className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-800 placeholder-gray-400"
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
            className="w-full bg-[#41563F] hover:from-[#2a4833] hover:to-[#1f3626] text-white font-titling font-black py-4 px-6 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 italic uppercase tracking-wider"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Iniciando sesion...
              </>
            ) : (
              <>
                <Mail className="w-5 h-5" />
               Continuar con correo electronico
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
