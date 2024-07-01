import useClickOutside from "./useClickOutside";

const HeaderSearchForm = ({ show, handleClose }) => {
  let domNode = useClickOutside(() => {
    handleClose(false);
  });
  return (
    <form
      role="search"
      method="get"
      className={`header-search-form ${show ? "show" : ""}`}
      action="#"
      ref={domNode}
      onSubmit={(e) => {
        e.preventDefault();
        handleClose();
      }}
    >
      <input
        type="text"
        defaultValue=""
        name="s"
        className="header-search-field"
        placeholder="Search..."
      />
      <button type="submit" className="header-search-submit" title="Search">
        <i className="fa fa-search" />
      </button>
    </form>
  );
};
export default HeaderSearchForm;
