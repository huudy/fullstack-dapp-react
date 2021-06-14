import React from "react";
// nodejs library that concatenates classes
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

const useStyles = makeStyles(styles);

export default function CandidatesSection() {
	const classes = useStyles();

	return (
		<div className={classes.section}>
			<GridContainer justify="center">
				<GridItem xs={12} sm={12} md={8}>
					<h2 className={classes.title}>Let{"'"}s vote</h2>
					<h5 className={classes.description}>
						We make sure Your vote will never dissaper nor it will change, or
						even gets deleted. Most importantly no vote can be fake.
					</h5>
				</GridItem>
			</GridContainer>
			<h2 className={classes.title}>Our Candidates</h2>
			<div>
				<GridContainer></GridContainer>
			</div>
		</div>
	);
}
