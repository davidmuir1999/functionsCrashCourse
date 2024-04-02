let child;

(initFlight = () => {
    let nbPassengers = 100;

    const addPassenger = () => {
        nbPassengers++;
        console.log(nbPassengers);
    }

    child = addPassenger;

})();

child();

//Closures have nothing to do with how, when or where
//you invoke your function but more with where you declare
//your function.