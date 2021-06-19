function Planet({data}) {
  return (
    <div className="Planet">
      {data.name}
      <br/><br/>
      {data.overview.content}
      <br/><br/>
    </div>
  );
}

export default Planet;
