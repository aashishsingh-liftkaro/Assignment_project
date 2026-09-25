import "./tableHeader.scss";

type TableHeaderProps = {
  title: string;
  description: string;
};

const TableHeader = ({ title, description }: TableHeaderProps) => {
  return (
    <div className="table-header">
      <h2 className="table-header-title">{title}</h2>
      <p className="table-header-description">{description}</p>
    </div>
  );
};

export default TableHeader;
