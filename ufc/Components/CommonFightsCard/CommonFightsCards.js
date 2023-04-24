export default function CommonFightsCard({ onClose }) {
    return (
        <>
            <section
                style={{
                    position: "fixed",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, 100%)",
                    backgroundColor: "#fff",
                    padding: "20px",
                    borderRadius: "10px",
                    boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
                    textAlign: "center",
                }}
            >
                <button
                    style={{
                        position: "absolute",
                        top: "10px",
                        right: "10px",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        fontSize: "1.2rem",
                    }}
                    onClick={onClose}
                >
                    X
                </button>
                <p>
                    Common Fights ..................
                    ....................................................
                    ........................................
                    ...............................
                </p>
                <p>
                    Common Fights ..................
                    ....................................................
                    ........................................
                    ...............................
                </p>
                <p>
                    Common Fights ..................
                    ....................................................
                    ........................................
                    ...............................
                </p>
            </section>
        </>
    );
}
