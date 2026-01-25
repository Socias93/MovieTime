import { range } from "./utils";

interface Props {
  pageSize: number;
  totalCount: number;
}

function Pagination({ pageSize, totalCount }: Props) {
  const pageCount = Math.ceil(totalCount / pageSize);

  let pages = range(1, pageCount);

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item">
          <a className="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        {pages.map((page) => (
          <li className="page-item">
            <a key={page + 1} className="page-link" href="#">
              {page}
            </a>
          </li>
        ))}

        <li className="page-item">
          <a className="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
