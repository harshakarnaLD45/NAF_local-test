import React from "react";
import { LinkedInIcon } from "../../../Componenets/CustomIcons";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

function TeamSection() {
    const { t } = useTranslation();

    const teamMembers = [
        {
            name: t('about.MeetTeamTitle1'),
            position: t('about.MeetTeamSubTitle1'),
            color: "#E7F9DC",
            linkedin: "#",
        },
        {
            name: t('about.MeetTeamTitle2'),
            position: t('about.MeetTeamSubTitle2'),
            color: "#FEB6A2",
            linkedin: "#",
        },
        {
            name: t('about.MeetTeamTitle3'),
            position: t('about.MeetTeamSubTitle3'),
            color: "#94CDFF",
            linkedin: "#",
        },
    ];
    return (
        <section className="section-container">
            <Typography className="headings-h2" variant="h2">{t('about.MeetTeam')}</Typography>
            <div className="team-grid">
                {teamMembers.map((member, idx) => (
                    <div
                        key={idx}
                        className="team-card"
                        style={{ backgroundColor: member.color }}
                    >
                        <div className="team-info">
                            <div>
                                <h3 className="bodyMediumText1">{member.name}</h3>
                                <p className="bodyMediumText3">{member.position}</p>
                            </div>
                            <a
                                href={member.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <LinkedInIcon />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default TeamSection;
