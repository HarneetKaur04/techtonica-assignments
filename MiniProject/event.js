class TicketType {
    constructor(name, price){
        this.name = name;
        this.price = price;
        
    }
}

class Event {
    constructor(name, description) {
      this.name = name;
      this.description = description;
      this.availableTickets = [];
      
    }
    addAvailableTickets(name, price){
        const newTicket = new TicketType(name, price)
        this.availableTickets.push(newTicket)
    };
    allTickets(){
            let result = ""
            for (let i =0; i<this.availableTickets.length; i++){
                result += `${i+1}. ${this.availableTickets[i].name} ($${this.availableTickets[i].price}) `
            }
            return `All tickets:  ${result}`
        }
    searchTickets(lowerrange, upperrange){
        let priceRange = "NOT AVAILABLE"
        for (let j =0; j<this.availableTickets.length; j++){
        if (this.availableTickets[j].price >= lowerrange && this.availableTickets[j].price <= upperrange){
            priceRange = ""
            priceRange += `Eligible tickets: ${j+1}. ${this.availableTickets[j].name} ($${this.availableTickets[j].price})`
        } 
    }
    
    return priceRange
        
    }
}


  // The below statement creates an object.
const eventObj1 = new Event(
    'KLOS Golden Gala',
    'An evening with hollywood vampires'
  );
const eventObj2 = new Event('Skillet & Sevendust', 'Victorious war tour');
const eventObj3 = new Event('Jenny Lewis', 'On the line tour 2019');

eventObj1.addAvailableTickets("human", 299);
eventObj1.addAvailableTickets("vampire", 99); 
eventObj2.addAvailableTickets("General Admission", 125)
eventObj2.addAvailableTickets("Floor Seating", 80)
eventObj3.addAvailableTickets("Orchestra", 300)
eventObj3.addAvailableTickets("Mezzanine", 200)
eventObj3.addAvailableTickets("Balcony", 100)


// eventObj1.searchTickets(0, 250)
// eventObj2.searchTickets(0, 250)
// eventObj3.searchTickets(0, 250)


const eventArray = new Array();

// pushing multiple objects to an array at once
eventArray.push(eventObj1, eventObj2, eventObj3);
console.log(eventArray)

document.addEventListener('DOMContentLoaded', () => {
    // Handler when the DOM is fully loaded
    let html = '';
    eventArray.forEach((item) => {
        
      html += `<li>${item.name} - ${item.description} - ${item.allTickets()} - ${item.searchTickets(120, 180)}`;

      
    });
    document.querySelector('#event').innerHTML = html;
  }); 







