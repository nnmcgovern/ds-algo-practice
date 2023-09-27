public class MadLibs {
  /*
  This program generates a mad libbed sotry.
  Author: Nat
  Date 9/27/2023
  */
  	public static void main(String[] args){
      String name1 = "Me";
      String adjective1 = "asleep";
      String adjective2 = "wistful";
      String noun1 = "bird";
      String noun2 = "shoe";
      String verb1 = "crawl";
      String noun3 = "chair";
      String noun4 = "football";
      String adjective3 = "lumpy";
      String name2 = "Not me";
      String place1 = "Hell";
      String noun5 = "tree";
      int number = 47;
      String noun6 = "bell";
    
      //The template for the story
      String story = "This morning "+name1+" woke up feeling "+adjective1+". 'It is going to be a "+adjective2+" day!' Outside, a bunch of "+noun1+"s were protesting to keep "+noun2+" in stores. They began to "+verb1+" to the rhythm of the "+noun3+", which made all the "+noun4+"s very "+adjective3+". Concerned, "+name1+" texted "+name2+", who flew "+name1+" to "+place1+" and dropped "+name1+" in a puddle of frozen "+noun5+". "+name1+" woke up in the year "+number+", in a world where "+noun6+"s ruled the world.";

      System.out.println(story);
    }       
}
