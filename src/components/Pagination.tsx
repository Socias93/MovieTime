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
      <ul className="pagination">
        <li className="page-item">
          <a className="page-link" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        {pages.map((page) => (
          <li className="page-item">
            <a
              key={page + 1}
              className={`page-link ${page === selectedPage ? "active" : ""}`}>
              {page}
            </a>
          </li>
        ))}

        <li className="page-item">
          <a className="page-link" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
