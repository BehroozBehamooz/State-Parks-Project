/*
  Complete the functions below as described in the instructions.

  The `parks` parameter refers to an array of objects with the following shape:
  {
    id: 1,
    name: "Acadia",
    areaInSquareKm: 198.6,
    location: { state: "Maine" },
  }

  The `users` parameter refers to an object with the following shape:
  {
    "karah.branch3": {
      visited: [1],
      wishlist: [4, 6],
    }
  }
*/

function getParksByState(parks,state) {
  return parks.filter(p => p.location.state===state);

}

function getWishlistParksForUser(parks,users,userName) {
  return parks.filter(p => users[userName].wishlist.includes(p.id));
}

function userHasVisitedAllParksInState(parks,users,state,userName) {
  return getParksByState(parks,state).map(p => p.id).every(id => users[userName].visited.includes(id));
  /*
  const parksInState= getParksByState(parks,state);
  const stateParksId=  parksInState.map(p => p.id);
  const isAllVisited= stateParksId.every(id => users[userName].visited.includes(id));
  return isAllVisited;
  */
}

function userHasVisitedParkOnWishlist(users,userName1,userName2) {
  return users[userName1].visited.some(id => users[userName2].wishlist.includes(id) );
   
}
function getUsersForUserWishlist(users,userName) {
    return Object.keys(users).filter(un => users[un].visited.some(id => users[userName].wishlist.includes(id)));
}

module.exports = {
  getParksByState,
  getWishlistParksForUser,
  getUsersForUserWishlist,
  userHasVisitedAllParksInState,
  userHasVisitedParkOnWishlist,
};
