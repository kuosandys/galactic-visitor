import StyledButton from "./StyledButton";

function ItemQuantityForm(props) {
  const { onAddToCart, onInputChanged, tourData } = props;
  return (
    <form onSubmit={onAddToCart}>
      <label>
        <i className="fas fa-user-astronaut"></i>
        <input
          type="number"
          name={tourData.fileName}
          defaultValue={tourData.count}
          max="10"
          min="1"
          onChange={onInputChanged}
        ></input>
      </label>
      <StyledButton type="submit">Update Cart</StyledButton>
      <p></p>
    </form>
  );
}

export default ItemQuantityForm;
