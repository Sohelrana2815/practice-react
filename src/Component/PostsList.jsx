const PostsList = ({ post }) => {
  const { id, name, email, phone, username } = post;
  return (
    <>
      <tr className="hover">
        <th>{name}</th>
        <td>{email}</td>
        <td>{phone}</td>
        <td>{username}</td>
      </tr>
    </>
  );
};

export default PostsList;
