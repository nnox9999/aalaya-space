export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <main className="flex flex-col items-center justify-center gap-4 text-center">
        <p className="text-sm uppercase tracking-widest text-purple-300" style={{
          textShadow: '0 0 10px rgba(192, 132, 250, 0.6)',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          fontWeight: '300',
          letterSpacing: '0.15em'
        }}>
          coming soon
        </p>
        <h1 className="text-8xl font-black text-purple-400 drop-shadow-lg" style={{
          textShadow: '0 0 30px rgba(192, 132, 250, 0.9), 0 0 60px rgba(192, 132, 250, 0.5)',
          letterSpacing: '0.05em',
          fontFamily: 'system-ui, -apple-system, sans-serif'
        }}>
          aalaya.space
        </h1>
        <p className="text-lg uppercase tracking-widest text-purple-200 mt-6" style={{
          textShadow: '0 0 15px rgba(192, 132, 250, 0.7)',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          fontWeight: '300',
          letterSpacing: '0.2em'
        }}>
          humans for humans
        </p>
      </main>
    </div>
  );
}
