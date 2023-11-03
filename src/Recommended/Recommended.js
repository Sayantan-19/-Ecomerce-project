import Button from"../components/button";
import "./Recomendation.css";

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div>
        <h2  className="recomended-title">Recommended</h2>
        <div className="Recomended-btns">
          <Button onClickHandler={handleClick} value="" title="All Products" />
          <Button onClickHandler={handleClick} value="Nike" title="Nike" />
          <Button onClickHandler={handleClick} value="Adidas" title="Adidas" />
          <Button onClickHandler={handleClick} value="Puma" title="Puma" />
          <Button onClickHandler={handleClick} value="Vans" title="Vans" />
        </div>
      </div>
    </>
  );
};

export default Recommended;
;