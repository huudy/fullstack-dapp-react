import React from "react";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(styles);
import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";
import classNames from "classnames";
import team1 from "assets/img/faces/avatar.jpg";
import Button from "components/CustomButtons/Button.js";
import PropTypes from "prop-types";

const CandidateCard = (props) => {
	const { id, name, desc, work, voteCount } = props;
	const classes = useStyles();
	const imageClasses = classNames(
		classes.imgRaised,
		classes.imgRoundedCircle,
		classes.imgFluid
	);
	return (
		<GridItem key={id} xs={12} sm={6} md={6}>
			<Card plain>
				<GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
					<img src={team1} alt="..." className={imageClasses} />
				</GridItem>
				<h4 className={classes.cardTitle}>
					{name}
					<br />
					<small className={classes.smallTitle}>{work}</small>
					<small className={classes.smallTitle}>Votes</small>
					<small className={classes.smallTitle}>{voteCount}</small>
				</h4>
				<CardBody>
					<p className={classes.description}>{desc}</p>
				</CardBody>
				<CardFooter className={classes.justifyCenter}>
					<Button color="primary" size="lg">
						Vote
					</Button>
				</CardFooter>
			</Card>
		</GridItem>
	);
};
export default CandidateCard;

CandidateCard.propTypes = {
	id: PropTypes.number,
	name: PropTypes.string,
	desc: PropTypes.string,
	work: PropTypes.string,
	voteCount: PropTypes.number,
};
