
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Logo } from '../components/Logo';
import { ArrowRight, ShieldAlert } from 'lucide-react';

interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsAuthenticating(true);

    setTimeout(() => {
      if (password === '12345') {
        onLogin();
        navigate('/admin');
      } else {
        setError('ACCESS_DENIED :: INVALID_CREDENTIALS');
        setIsAuthenticating(false);
        setPassword('');
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#121212] text-[#F2EDE4] flex flex-col items-center justify-center p-8 font-mono">
      <div className="w-full max-w-md text-center reveal">
        <Logo className="text-5xl text-white/50 mx-auto mb-8" />
        <h1 className="flex items-center justify-center gap-4 text-lg font-black uppercase tracking-[0.4em] text-white/30 mb-2">
          <ShieldAlert size={18} className="text-[#8E4E35]" />
          Secure Terminal Access
        </h1>
        <p className="text-sm text-white/20 mb-16">
          Maison d'Archive Administrative Command
        </p>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="relative">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="ENTER_PASSCODE"
              className={`w-full bg-black/40 border-2 ${error ? 'border-red-500/50' : 'border-white/10'} text-center p-6 text-lg font-black tracking-[0.5em] uppercase outline-none focus:border-[#8E4E35] transition-all duration-300 placeholder:text-white/10`}
              disabled={isAuthenticating}
            />
          </div>
          
          {error && (
            <p className="text-red-500 text-xs font-black tracking-widest animate-pulse">{error}</p>
          )}

          <button
            type="submit"
            disabled={isAuthenticating || !password}
            className="group w-full flex items-center justify-center gap-4 bg-[#8E4E35] text-white p-6 text-sm font-black uppercase tracking-[0.5em] transition-all duration-300 hover:bg-white hover:text-black disabled:bg-white/5 disabled:text-white/20 disabled:cursor-not-allowed"
          >
            {isAuthenticating ? (
              <>
                <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                <span>AUTHENTICATING...</span>
              </>
            ) : (
              <>
                <span>Authorize</span>
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-2" />
              </>
            )}
          </button>
        </form>

        <div className="mt-24 pt-16 border-t border-white/5 text-center text-[9px] uppercase tracking-[0.3em] text-white/10">
          <p>SYSTEM_ID: NBO_ARCHIVE_CMS_v3.1</p>
          <p className="mt-2">All access attempts are monitored and logged.</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
