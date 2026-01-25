import { range } from "./utils";

interface Props {
  pageSize: number;
  totalCount: number;
  selectedPage: number;
  setSelectedPage(page: number): void;
}

function Pagination({
  pageSize,
  totalCount,
  selectedPage,
  setSelectedPage,
}: Props) {
  const pageCount = Math.ceil(totalCount / pageSize);

  let pages = range(1, pageCount);

  return (
    <nav aria-label="Page navigation example">
      <ul
        className="pagination"
        style={{
          border: " solid #333",
          borderRadius: "8px",
          boxShadow: "none",
        }}>
        <li className="page-item">
          <a className="page-link text-dark" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        {pages.map((page) => (
          <li key={page + 1} className="page-item">
            <a
              onClick={() => setSelectedPage(page)}
              className={`clickable page-link ${page === selectedPage ? "bg-dark text-white" : "bg-white text-dark"}`}>
              {page}
            </a>
          </li>
        ))}

        <li className="page-item">
          <a className="page-link text-dark" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
