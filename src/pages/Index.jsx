import { useState, useEffect } from 'react';
import { Paw, Heart, Info, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const DogBreeds = () => {
  const breeds = [
    { name: 'Labrador Retriever', trait: 'Friendly and Outgoing' },
    { name: 'German Shepherd', trait: 'Loyal and Courageous' },
    { name: 'Golden Retriever', trait: 'Intelligent and Devoted' },
    { name: 'French Bulldog', trait: 'Playful and Adaptable' },
    { name: 'Bulldog', trait: 'Calm and Dignified' },
    { name: 'Poodle', trait: 'Proud and Elegant' }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {breeds.map((breed, index) => (
        <motion.div
          key={breed.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle>{breed.name}</CardTitle>
              <Badge variant="secondary">{breed.trait}</Badge>
            </CardHeader>
            <CardContent>
              <img 
                src={`https://source.unsplash.com/400x300/?${breed.name.toLowerCase().replace(' ', '-')}`} 
                alt={breed.name} 
                className="w-full h-48 object-cover rounded-md mb-2"
              />
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

const FunFacts = () => {
  const facts = [
    "Dogs have a sense of smell that's up to 100,000 times stronger than humans.",
    "The Basenji is the only breed of dog that can't bark, but they can yodel!",
    "A dog's nose print is unique, much like a human's fingerprint.",
    "Greyhounds can reach speeds of up to 45 miles per hour.",
    "The tallest dog ever recorded was a Great Dane named Zeus, who stood at 44 inches tall."
  ];

  return (
    <ul className="space-y-4">
      {facts.map((fact, index) => (
        <motion.li
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="flex items-start space-x-2"
        >
          <Paw className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
          <span>{fact}</span>
        </motion.li>
      ))}
    </ul>
  );
};

const CareTips = () => {
  const tips = [
    { title: "Balanced Diet", description: "Provide a balanced diet appropriate for your dog's age, size, and activity level." },
    { title: "Regular Exercise", description: "Ensure your dog gets regular exercise through walks, playtime, and mental stimulation." },
    { title: "Veterinary Check-ups", description: "Schedule regular check-ups with a veterinarian for vaccinations and health screenings." },
    { title: "Grooming", description: "Groom your dog regularly, including brushing their coat and teeth." },
    { title: "Socialization", description: "Socialize your dog from a young age to help them become well-adjusted adults." }
  ];

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-semibold text-center mb-4">Essential Dog Care Tips</h3>
      {tips.map((tip, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">{tip.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{tip.description}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

const Index = () => {
  const [activeTab, setActiveTab] = useState("breeds");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white p-8">
      <motion.div
        className="max-w-5xl mx-auto"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : -20 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-bold mb-8 text-center text-primary">All About Dogs</h1>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="breeds" className="text-lg"><Paw className="mr-2 h-5 w-5" /> Dog Breeds</TabsTrigger>
            <TabsTrigger value="facts" className="text-lg"><Info className="mr-2 h-5 w-5" /> Fun Facts</TabsTrigger>
            <TabsTrigger value="care" className="text-lg"><Heart className="mr-2 h-5 w-5" /> Care Tips</TabsTrigger>
          </TabsList>
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <TabsContent value="breeds">
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="text-3xl">Popular Dog Breeds</CardTitle>
                  <CardDescription className="text-lg">Explore some of the most beloved dog breeds.</CardDescription>
                </CardHeader>
                <CardContent>
                  <DogBreeds />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="facts">
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="text-3xl">Fun Dog Facts</CardTitle>
                  <CardDescription className="text-lg">Discover interesting facts about our canine companions.</CardDescription>
                </CardHeader>
                <CardContent>
                  <FunFacts />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="care">
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="text-3xl">Dog Care Tips</CardTitle>
                  <CardDescription className="text-lg">Learn how to keep your furry friend happy and healthy.</CardDescription>
                </CardHeader>
                <CardContent>
                  <CareTips />
                </CardContent>
              </Card>
            </TabsContent>
          </motion.div>
        </Tabs>
      </motion.div>
    </div>
  );
};

export default Index;
