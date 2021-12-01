import { useEffect } from "react";
import axios from "axios";

export default function PokeAPI(props) {

    useEffect(() => {

      axios
        .get("https://pokeapi.co/api/v2/pokemon?limit=151")
        .then((response) => {
          const pokelist = response.data.results;
  
          const requests = [];
          const imgs = [];
  
          for (let i = 0; i < pokelist.length; i++) {

            requests.push(axios.get(pokelist[i].url));

          }
  
          axios.all(requests).then((responses) => {

            const pokelists = responses.map((response) => {
              return response.data;
            });
            
            for (let i = 0; i < pokelist.length; i++) {

                imgs.push(pokelists[i].sprites.front_default);
                
              }

              props.setImgs(imgs)

          });
        });
    });

    return null;
  
}