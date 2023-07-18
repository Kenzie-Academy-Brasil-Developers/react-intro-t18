export const CategoryCard = ({ title, img }) => {
   //Props transporta valores de Javascript
   return (
      <li>
         <img src={img} alt={title} />
         <h3 className="title3">{title}</h3>
      </li>
   );
};
//PROPS - tipo uns parâmetro lá!

/*
function message(message){
    console.log(message);
}

message("Oi");
message("Tudo bem?");
*/
