import { useEffect, useState } from "react";
import "./App.css";
import Pagination from "./Components/Pagination";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function App() {
  const [users, setUsers] = useState([]);
  const { page } = useParams();
  const [currentPage, setCurrentPage] = useState(page);
  const [totalPages, setTotalPages] = useState(0);
  const navigate = useNavigate();

  const backendUrl = "https://pagination-backend23.onrender.com/api";
  // const backendUrl = "http://localhost:5000/api";

  console.log(page);

  //fetching user data from backend
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          `${backendUrl}/users?page=${currentPage}`
        );
        setUsers(response.data.user);
        setTotalPages(response.data.totalPages);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUsers();
  }, [currentPage]);

  //handling page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    navigate(`/users/${pageNumber}`);
    localStorage.setItem("page", page);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-2 text-white bg-black">
      <ul className="min-h-[60vh] text-white text-3xl">
        {users.map((user) => (
          <li key={user._id} className="font-medium">
            <p className="font-medium text-sky-600">
              <span className="text-sky-200">Name: </span>
              <span className="capitalize">{user.name}</span>
            </p>
          </li>
        ))}
      </ul>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        page={page}
      />
    </div>
  );
}

export default App;
