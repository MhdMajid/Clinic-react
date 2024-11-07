const NewDate  = () => {

    
    return (
        <div className="w-75">
          <div className="mb-3">
            <label for="" className="form-label">
              Name
            </label>
            <input
              type="date"
              name=""
              id=""
              className="form-control"
              placeholder="Add new Date"
              aria-describedby="helpId"
            />
            <button className="btn btn-primary mt-2">Add Date</button>
          </div>
        </div>

      );
}
export default NewDate;