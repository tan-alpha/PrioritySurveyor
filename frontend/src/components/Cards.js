import React from "react";
import { Card, CardColumns } from "react-bootstrap";

export default function cards() {
  return (
    <CardColumns>
      <Card
        style={{
          width: "18rem",
          height: "22rem",
          textAlign: "center",
          borderRadius: "1rem",
          boxShadow: ".2px .2px black",
          marginLeft: "30px",
          opacity: ".8",
          color: "black",
        }}
      >
        <Card.Img
          style={{
            height: "150px",
            width: "170px",
            textAlign: "center",
            padding: "13px",
            marginTop: "5px",
          }}
          variant="top"
          src="./3.png"
        />
        <Card.Body>
          <Card.Title
            style={{
              textTransform: "uppercase",
              fontSize: "32px",
            }}
          >
            {" "}
            SERVICE
          </Card.Title>{" "}
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card 's content.{" "}
          </Card.Text>
        </Card.Body>{" "}
      </Card>
      <Card
        style={{
          width: "18rem",
          height: "22rem",
          textAlign: "center",
          borderRadius: "1rem",
          boxShadow: ".2px .2px black",
          background: "white",
          marginLeft: "20px",
          opacity: ".8",
          color: "black",
        }}
      >
        <Card.Img
          style={{
            height: "160px",
            width: "160px",
            textAlign: "center",
            padding: "13px",
            marginTop: "5px",
            marginBottom: "-10px",
          }}
          variant="top"
          src="./5.png"
        />
        <Card.Body>
          <Card.Title
            style={{
              textTransform: "uppercase",
              fontSize: "32px",
            }}
          >
            {" "}
            FAQ{" "}
          </Card.Title>{" "}
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card 's content.{" "}
          </Card.Text>
        </Card.Body>{" "}
      </Card>
      <Card
        style={{
          width: "18rem",
          height: "22rem",
          textAlign: "center",
          borderRadius: "1rem",
          boxShadow: ".2px .2px black",
          background: "white",
          marginLeft: "20px",
          opacity: ".8",
          color: "black",
        }}
      >
        <Card.Img
          style={{
            height: "150px",
            width: "150px",
            textAlign: "center",
            padding: "13px",
            marginTop: "5px",
          }}
          variant="top"
          src="./4.png"
        />
        <Card.Body>
          <Card.Title
            style={{
              textTransform: "uppercase",
              fontSize: "32px",
            }}
          >
            {" "}
            Maintenance{" "}
          </Card.Title>{" "}
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card 's content.{" "}
          </Card.Text>
        </Card.Body>{" "}
      </Card>
    </CardColumns>
  );
}
