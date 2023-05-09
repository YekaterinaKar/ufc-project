export default function Voting (){
    return (
        <div>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "10px",
                }}
            >
                <div style={{ flex: 1 }}>
                    <div
                        style={{
                            fontSize: "24px",
                            fontWeight: "bold",
                            marginBottom: "5px",
                        }}
                    >
                        {fairPercentage}%
                    </div>
                    <div style={{ fontSize: "16px" }}>Fair</div>
                </div>
                <div
                    style={{
                        height: "50px",
                        width: "5px",
                        backgroundColor: "black",
                        margin: "0 10px",
                    }}
                ></div>
                <div style={{ flex: 1 }}>
                    <div
                        style={{
                            fontSize: "24px",
                            fontWeight: "bold",
                            marginBottom: "5px",
                        }}
                    >
                        {notFairPercentage}%
                    </div>
                    <div style={{ fontSize: "16px" }}>Not Fair</div>
                </div>
            </div>

            <button onClick={() => setFairVotes((prev) => prev + 1)}>
                Fair
            </button>
            <button onClick={() => setNotFairVotes((prev) => prev + 1)}>
                Not Fair
            </button>
        </div>
        
    )
}