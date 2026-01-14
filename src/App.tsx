function App() {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#F9FAFB' }}>
      <a
        href="https://flavio1227.github.io/SIGEM1.1/"
        className="fixed top-6 left-6 px-6 py-2.5 text-sm font-medium transition-colors duration-200"
        style={{
          backgroundColor: '#FFFFFF',
          color: '#1F2937',
          border: '1px solid #E5E7EB',
          borderRadius: '8px',
        }}
      >
        SIGEM
      </a>

      <div className="flex flex-col items-center justify-center px-6 text-center">
        <div className="flex items-center justify-center gap-8 mb-8">
          <img
            src={`${import.meta.env.BASE_URL}LOGOSIGEM.svg`}
            alt="SIGEM Logo"
            className="h-32 w-auto"
          />
          <img
            src={`${import.meta.env.BASE_URL}LOGOINHGEOMIN.svg`}
            alt="INHGEOMIN Logo"
            className="h-32 w-auto"
          />
        </div>

        <p
          className="text-xl font-medium max-w-2xl"
          style={{ color: '#1F2937' }}
        >
          Actualmente en etapa de construcción.
        </p>
      </div>
    </div>
  );
}

export default App;
