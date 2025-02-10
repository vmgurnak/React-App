import './App.css';

// ---------import components----------------
import Profile from './components/Profile/Profile.jsx';
import FriendList from './components/FriendList/FriendList.jsx';
import TransactionHistory from './components/TransactionHistory/TransactionHistory.jsx';

// ---------import data---------
import userData from './userData.json';
import friends from './friends.json';
import transactions from './transactions.json';

const { username, tag, location, avatar, stats } = userData;

const App = () => {
  return (
    <div className="container">
      <div className="wrapComponent">
        <h2 className="titleComponent">Profile</h2>
        <Profile
          name={username}
          tag={tag}
          location={location}
          image={avatar}
          stats={stats}
        />
      </div>
      <div className="wrapComponent">
        <h2 className="titleComponent">FriendList</h2>
        <FriendList friends={friends} />
      </div>
      <div className="wrapComponent">
        <h2 className="titleComponent">TransactionHistory</h2>
        <TransactionHistory items={transactions} />
      </div>
    </div>
  );
};

export default App;
