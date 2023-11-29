

const EnrollCard = ({ enroll }) => {
     const { totalEnrollment} = enroll ||{}
  return (
    <div>
       {totalEnrollment ? (
        <p className="text-xl text-center">{totalEnrollment}</p>
      ) : (
        <p>0</p>
      )}

    </div>
  );
};
export default EnrollCard;