import  './MealsSummary.css';

const MealsSummary = (props) => {
  const changeHandleSummery=()=>{
    props.onChangeHandleSummery(false)
  }
  return (
    <section className="summary">
      <h2>Delicious Food, Delivered To You</h2>
      <p>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
      <button className="ok-button" onClick={changeHandleSummery}>OK</button>
    </section>
  );
};

export default MealsSummary;