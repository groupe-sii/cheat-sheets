Redux version: __4.0.5__ - Date __April 2020__

# GENERAL GUIDELINE

__Why Redux?:__ With Redux we manage a single one global store at our application and with this we can deal with the communication's limitation of unidirectional flux between father and child components.

__Single source of truth:__ only one state <br/>
__State is immutable (read-only):__ only an action can trigger a change, you can't do it directly  <br/>
__Changes are made with pure functions:__ only the reducers can transform the state  <br/>

# Redux Flow Concept
![gitZone](../assets/images/redux-flow.png)

<div class='definitions-flow'>

* <span class='color-block'>State</span> Data that you will consume to manipulate your interface (UI)
* <span class='color-block'>UI (View)</span> Interface that will be modified according to your state
* <span class='color-block'>Actions (Dispatch)</span> Every action that calls your reducer to mutate your state
* <span class='color-block'>Reducer</span> A function (or group of functions) that will mutate the data and send the new data to the store
* <span class='color-block'>Store</span> Holds the whole state tree of your application
</div>