import Wrapper from './ContactInfo.styled'


const ContactInfo = ({ contact: { id, name, number }, onDelete }) => {
  return (
    <Wrapper>
      <p>Name: {name}</p>
      <p>Number: {number}</p>
      <button onClick={() => onDelete(id)}>Delete</button>
    </Wrapper>
  );
};

export default ContactInfo;
