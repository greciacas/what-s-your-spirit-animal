import { Link } from 'react-router-dom';
import styled from 'styled-components';
import image1 from './images/work.png';
import image2 from './images/chill.png';
import image3 from './images/metime.png';

const Button1 = styled.button`
    background-image: url(${image1});
    color: black;
    font-size: 20px;
    font-family: Times New Roman;
    font-weight: bold;
    padding: 150px 123px;
    box-shadow: 0px 5px 7px grey;
    cursor: pointer;
    margin: 30px 15px;
  `;

const Button2 = styled(Button1)`
  background-image: url(${image2});
  padding: 148px 50px;
`;

const Button3 = styled(Button1)`
  background-image: url(${image3});
  padding: 145px 122px;
`;

function Question3(props) {
  function handleClick(e) {
    e.preventDefault();
    props.setOffDay(e.target.value);
    console.log('it is working as well');
  }

  return (
    <>
    <div>
      <h1>{props.question} </h1>
      <Button1 className='optionA' value='working' onClick={handleClick}> <span className='highlight'>Catch Up On Work</span> </Button1>
      <Button2 className='optionB' value='friends' onClick={handleClick}> <span className='highlight'>Hang Out With Family/Friends</span> </Button2>
      <Button3 className='optionC' value='relaxing' onClick={handleClick}> <span className='highlight'>Me Time!</span> </Button3>
    </div>

    <div>
      <Link to='/question4'>
        <button type='submit' >NEXT</button>
      </Link>
    </div>

    </>
  );
}

export default Question3;
