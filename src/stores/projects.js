import { defineStore } from "pinia";
import behance from "../assets/icons/icon(1).png";
import medium from "../assets/icons/icon(2).png";
import twitter from "../assets/icons/icon(3).png";
import linkedin from "../assets/icons/icon(4).png";
import dribble from "../assets/icons/icon(5).png";
import whiteBehance from '../assets/icons/wicon(1).png';
import whiteDribble from '../assets/icons/wicon(2).png';
import whiteLinkedIn from '../assets/icons/wicon(3).png';
import whiteTwitter from '../assets/icons/wicon(4).png';
import whiteMedium from '../assets/icons/wicon(5).png';
import db from "../firebaseInit";
import { collection, getDocs } from 'firebase/firestore';

export const useProjectsStore = defineStore("projects", {
  state: () => ({
    socialLinks: [
      {name: "behance", href: "https://www.behance.net/obatobiayeni", link1: behance, link2: whiteBehance},
      {name: "dribble", href: "https://dribbble.com/obatobiayeni", link1: dribble, link2: whiteDribble},
      {name: "linkedin", href: "https://www.linkedin.com/in/obatobiayeni", link1: linkedin, link2: whiteLinkedIn},
      {name: "twitter", href: "https://twitter.com/obatobiayeni", link1: twitter, link2: whiteTwitter},
      {name: "medium", href: "https://medium.com/@obatobiayeni", link1: medium, link2: whiteMedium},
    ],
    mail: "mailto:hello@obatobiayeni.com",
    tel: "+2348130159953",
    projects: [],
  }),
  actions: {
    async getProjects() {
      console.log("initiated...");
      const docs = await getDocs(collection(db, "projects"));
      this.projects = [];
      docs.forEach((doc) => {
        console.log("Fectched");
        console.log(doc.data());
        this.projects.push(doc.data());
        console.log(this.projects);
      });
      console.log("Success");
    }
  }
})