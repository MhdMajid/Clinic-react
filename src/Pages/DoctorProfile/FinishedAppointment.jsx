const FinishedAppointment  = () => {
    return(
        <div className="table-responsive-lg">
        <table className="table table-striped-columns table-hover table-borderless  table-success table-striped align-middle">
          <thead className="table-light">
            <h3 className="text-primary">Booked Appointments Today</h3>
            <tr>
              <th>Date</th>
              <th>Time</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            <tr className="table-primary">
              <td>12/12/12</td>
              <td >03:00</td>
              <td>Name</td>
              <td>+963912345678</td>
              <td>Test@gmail.com</td>
              <td>Damac/test/tset</td>
              <td>
                <button type="button" className="btn btn-primary"> Details</button>
                <button type="button" className="btn btn-success mx-2"> Edit</button>
                <button type="button" className="btn btn-danger "> Delete</button>
              </td>
            </tr>
         
          </tbody>
          <tfoot></tfoot>
        </table>
      </div>

    )
}
export default FinishedAppointment;