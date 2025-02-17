import React from "react";
import { Button, Fieldset, Grid, Text } from "@geist-ui/react";
import Question from "./components/Question";
import BoolQuestion from "./components/BoolQuestion";

const WorkstationQuiz = () => {
  const [windows, setWindows] = React.useState(1);
  const [experience, setExperience] = React.useState(1);
  const [ux, setUx] = React.useState(1);
  const [security, setSecurity] = React.useState(1);
  const [privacy, setPrivacy] = React.useState(1);
  const [stability, setStability] = React.useState(1);
  const [gaming, setGaming] = React.useState(false);
  const [customize, setCustomize] = React.useState(1);
  const [install, setInstall] = React.useState(1);
  const [community, setCommunity] = React.useState(1);

  const submit = () => {
    const quizState = {
      windows,
      experience,
      ux,
      security,
      privacy,
      stability,
      gaming,
      customize,
      install,
      community,
    };
    console.log(quizState);
  };

  const handleWindowsChange = (value) => {
    setWindows(value);
  };

  const handleExperienceChange = (value) => {
    setExperience(value);
  };

  const handleUXChange = (value) => {
    setUx(value);
  };

  const handleSecurityChange = (value) => {
    setSecurity(value);
  };

  const handlePrivacyChange = (value) => {
    setPrivacy(value);
  };

  const handleStabilityChange = (value) => {
    setStability(value);
  };

  const handleGamingChange = (value) => {
    setGaming(value);
  };

  const handleCustomizeChange = (value) => {
    setCustomize(value);
  };

  const handleInstallChange = (value) => {
    setInstall(value);
  };

  const handleCommunityChange = (value) => {
    setCommunity(value);
  };

  const windowsTooltip =
    "This question specifically refers to general functions such as creating/deleting files, modifying settings, and competent use of the Windows operating system.";
  const linuxTooltip =
    "This question targets general Linux experience such as basic navigation, installing packages through the included store or command-line package manager, modifying settings, etc. It also covers basic knowledge about parts of the linux operating system such as what a desktop environment, terminal, or package is.";
  const uxTooltip =
    "This question refers to how important the ease of use of your operating system. For example, MS-DOS (command-line only) would be a 2. An iPhone would be an 8 or 9.";
  const securityTooltip =
    "This question pertains to the general security features of the operating system such as disk encryption, password managers, and virtualization. Your grandma's passwords would be a zero, and a 4096 character encryption key would be a 10.";
  const privacyTooltip =
    "This question pertains to the general privacy features of the operating system such as telemetry, advertisement tracking, and disk encryption. Facebook would be a 1 and printer from 2004 would be a 10.";
  const stabilityTooltip =
    "This question pertains to the general stability features of the operating system such as security updates and long term support. A 1 would be the most unstable, with 10 being a rock solid system.";
  const customizeTooltip =
    "This question pertains to the general customization features of the operating system such as themes, fonts, and language packs. A 1 would be the least customizable, with 10 being a fully custom system.";
  const installTooltip =
    "This question pertains to how easy the operating system is to install. 1 would mean its preinstalled, 10 would mean you custom compile from source and manually install the files yourself.";
  const communityTooltip =
    "This question pertains to things like the user forum for a particular operating system. 1 would be a system with no community features or help at all, and 10 would be a densely populated forum with almost any answer you need. ";

  return (
    <Fieldset label="workstation">
      <Fieldset.Title>Workstation Use</Fieldset.Title>
      <Fieldset.Subtitle>
        <Text>
          <h5>All scales are from 1 to 10.</h5>
        </Text>
        <Grid.Container width="50rem" direction="column" gap={2}>
          <Grid>
            <Question tooltip={windowsTooltip} onChange={handleWindowsChange}>
              How experienced are you with Microsoft&#39;s Windows?
            </Question>
          </Grid>
          <Grid>
            <Question tooltip={linuxTooltip} onChange={handleExperienceChange}>
              How experienced are you with Linux?
            </Question>
          </Grid>
          <Grid>
            <Question tooltip={uxTooltip} onChange={handleUXChange}>
              How important is user experience to you?
            </Question>
          </Grid>
          <Grid>
            <Question tooltip={securityTooltip} onChange={handleSecurityChange}>
              How important is security to you?
            </Question>
          </Grid>
          <Grid>
            <Question tooltip={privacyTooltip} onChange={handlePrivacyChange}>
              How important is privacy to you?
            </Question>
          </Grid>
          <Grid>
            <Question
              tooltip={stabilityTooltip}
              onChange={handleStabilityChange}
            >
              How important is stability to you?
            </Question>
          </Grid>
          <Grid>
            <Question
              tooltip={customizeTooltip}
              onChange={handleCustomizeChange}
            >
              How important is customizability to you?
            </Question>
          </Grid>
          <Grid>
            <Question tooltip={installTooltip} onChange={handleInstallChange}>
              How important is ease of installation to you?
            </Question>
          </Grid>
          <Grid>
            <Question
              tooltip={communityTooltip}
              onChange={handleCommunityChange}
            >
              How important is a large community of similar users to you?
            </Question>
          </Grid>
          <Grid>
            <BoolQuestion onChange={handleGamingChange}>
              Do you use your computer for gaming?
            </BoolQuestion>
          </Grid>
        </Grid.Container>
      </Fieldset.Subtitle>
      <Fieldset.Footer>
        Submit The Quiz
        <Button auto onClick={submit}>
          Submit
        </Button>
      </Fieldset.Footer>
    </Fieldset>
  );
};

export default WorkstationQuiz;
