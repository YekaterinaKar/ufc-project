export default function Voting (){
    return (
       <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "10px",
                    }}
                >
                    <h3>Do you think the jurging of the fight was fare?</h3>
                    
                    <button onClick={() => setFairVotes((prev) => prev + 1)}>
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
                    </button>
                    <div
                        style={{
                            height: "50px",
                            width: "5px",
                            backgroundColor: "black",
                            margin: "0 10px",
                        }}
                    ></div>
                    <button onClick={() => setNotFairVotes((prev) => prev + 1)}>
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
                    </button>
                </div>
            
        
    )
}