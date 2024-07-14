import { useState, useEffect } from 'react';
import axios from "axios";

function Posts() {

  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}posts`);

        if (response.status != 200) {
          throw new Error('Network response was not ok');
        }

        const result = await response.data;
        setData(result);

      } catch (e) { console.log(e) }
    }

    fetchData();
  }, []);

  return (
    <>
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Title</th>
              <th scope="col">Body</th>
            </tr>
          </thead>
          <tbody>
            {data.map((post) => (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </>
  )
}

export default Posts;
