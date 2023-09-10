import { connect } from "react-redux";
import "./AddMoreBtn.css";
import { fetchBooks } from "../redux/operations";

function AddMoreBtn({ dataQuery, loadAmount, onAddMore }) {
  return (
    <div className="add-more-btn">
      <button
        className="add-more-btn__element"
        type="button"
        onClick={() => {
          onAddMore(dataQuery, loadAmount);
        }}
      >
        Load more
      </button>
    </div>
  );
}

const mapStateToProps = ({ dataQuery, loadAmount }) => ({
  dataQuery,
  loadAmount,
});

const mapDispatchToProps = (dispatch) => ({
  onAddMore: (data, step) => dispatch(fetchBooks(data, step)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddMoreBtn);
