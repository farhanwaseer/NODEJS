import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { getCaseById, placeBid, getBidsForCase } from "../utils/api";
import AuthContext from "../context/AuthContext";

const PlaceBid = () => {
  const { caseId } = useParams();
  const { user } = useContext(AuthContext);
  const [caseDetails, setCaseDetails] = useState(null);
  const [bidAmount, setBidAmount] = useState("");
  const [bids, setBids] = useState([]);
  const [page, setPage] = useState(1);
  const [totalBids, setTotalBids] = useState(0);

  useEffect(() => {
    const fetchCaseDetails = async () => {
      try {
        const res = await getCaseById(caseId);
        setCaseDetails(res.data);
        const bidRes = await getBidsForCase(caseId, page);
        setBids(bidRes.data);
      } catch (error) {
        alert("Error fetching case details.");
      }
    };
    fetchCaseDetails();
  }, [caseId, page]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!bidAmount || isNaN(bidAmount) || bidAmount <= 0) {
      alert("Please enter a valid bid amount.");
      return;
    }

    try {
      await placeBid(caseId, { amount: bidAmount }, localStorage.getItem("token"));
      alert("Bid placed successfully!");
      setBidAmount("");
      const bidRes = await getBidsForCase(caseId, page);
      setBids(bidRes.data); // Refresh the bids list
    } catch (error) {
      alert("Error placing bid.");
    }
  };

  const handlePagination = (direction) => {
    if (direction === "next" && bids.length === 10) {
      setPage(page + 1);
    } else if (direction === "prev" && page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <div>
      <h2>Bid for Case: {caseDetails?.title}</h2>
      {caseDetails ? (
        <>
          <p><strong>Description:</strong> {caseDetails.description}</p>
          <p><strong>Budget:</strong> {caseDetails.budget}</p>

          <h3>Place Your Bid</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="number"
              placeholder="Enter bid amount"
              value={bidAmount}
              onChange={(e) => setBidAmount(e.target.value)}
              required
            />
            <button type="submit">Place Bid</button>
          </form>

          <h3>Bids for this Case</h3>
          <ul>
            {bids.map((bid) => (
              <li key={bid._id}>
                <strong>{bid.lawyerId.name}</strong> - ${bid.amount}
              </li>
            ))}
          </ul>

          <div>
            <button onClick={() => handlePagination("prev")}>Previous</button>
            <button onClick={() => handlePagination("next")}>Next</button>
          </div>
        </>
      ) : (
        <p>Loading case details...</p>
      )}
    </div>
  );
};

export default PlaceBid;
