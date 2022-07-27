
const mood_day = [
    {
        moodId: 1,
        category: "Inspiring",
        inspo: "The purpose of our lives is to be happy.", 
    },
    {
        moodId: 2,
        category: "Bad_mood",
        inspo: "The grumpier you are, the more assholes you meet.",

    },

];


const newId =3;


module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        const fortunets = ["A feather in the hand is better than a bird in the air", "A golden egg of opportunity falls into your lap this month.","A good friendship is often more important than a passionate romance.","A good time to finish up old tasks. ","A pleasant surprise is waiting for you."];
      
    
        let randomIndex = Math.floor(Math.random() * fortunets.length);
        let randomFortunet = fortunets[randomIndex];
      
        res.status(200).send(randomFortunet);
    },
    getMoodByCategory: (req, res) => {
        const { category } = req.query;
        const moodToSend = mood_day.find((mood) => mood.category === category);
        if (moodToSend) {
          return res.status(200).send(moodToSend);
        }
        return res.status(400).send(`try a different category`);
      },
      postMood: (req, res) => {
        const { category, inspo } = req.body;
        const newObj = {
          moodId: newId,
          category,
          inspo,
        };
        mood_day.push(newObj)
        res.status(200).send(mood_day[mood_day.length-1])
      },
      deleteMood:(req,res) => {
        const {category} = req.params
        const foundIndex =mood_day.findIndex((mood) => mood.category === category);
        if(foundIndex !== -1){
         mood_day.splice(foundIndex,1)
          res.status(200).send(`Mood deleted`)
          return
        }
        res.status(400).send(`something went wrong, try again!`)
      }
    };

