// Spinner.tsx

const Spinner = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-white">
            <img
                src="Images/Loader.png"
                alt="Loading"
                className="w-32 h-32 animate-spin-slow"
            />
        </div>
    );
};

export default Spinner;
