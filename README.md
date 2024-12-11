# Aufgaben-Tracker Fullstack App

Die **Aufgaben-Tracker-App** ist eine Fullstack-Anwendung, die es Benutzern ermöglicht, Aufgaben zu erstellen, zu bearbeiten und zu löschen. Jede Aufgabe enthält die Attribute **Titel**, **Beschreibung**, **Priorität** und **Fälligkeitsdatum**. Die App wurde mit **React.js** für das Frontend und **Node.js** für das Backend entwickelt und nutzt **MongoDB Atlas** als Datenbank. Gehostet wird die Anwendung auf **Google Cloud Run**.

## **Live-Demo**
[Aufgaben-Tracker-App](https://aufgaben-tracker-fullstack-662141340388.europe-west10.run.app/)

---

## **Features**
- **Aufgaben hinzufügen**
- **Aufgaben bearbeiten**
- **Aufgaben löschen**
- **Aufgabenattribute**
  - **Titel**
  - **Beschreibung**
  - **Priorität** (*Low*, *Medium*, *High*, und *Very High*)
  - **Fälligkeitsdatum**

---

## **Technologien**
### **Frontend**
- **React.js**: Für die Benutzeroberfläche.
- **npm run build**: Zum Bauen des Frontends für die Produktion.

### **Backend**
- **Node.js**: Für den Server.
- **Express.js**: Zum Bereitstellen von API-Endpunkten.
- **Mongoose**: Für die MongoDB-Integration.
- **Dotenv**: Zum Verwalten von Umgebungsvariablen.

### **Datenbank**
- **MongoDB Atlas**: Gehostete Cloud-Datenbank.

### **Hosting**
- **Google Cloud Run**: Gehostete Umgebung für das Frontend und Backend.

---

## **Installation**
### **Voraussetzungen**
- **Node.js**
- **npm**

### **Schritte**
1. **Frontend installieren**:
   ```bash
   npx create-react-app .
   npm run build
