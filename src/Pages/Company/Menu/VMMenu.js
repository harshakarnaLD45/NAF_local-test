import React, { useEffect, useState, useCallback, useMemo } from "react";
import axios from "axios";
import {
  VegetarianIcon,
  VeganIcon,
  FishIcon,
  GlutenIcon,
  LactoseIcon,
  ProteinIcon,
  DietaryIcon,
  MapIcon,
} from "../../../Componenets/CustomIcons";
import SlotCard from "./SlotCard";
import {
  Box,
  Grid,
  Typography,
  Button,
  CircularProgress,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import LocationModal from "./LocationModal";
import DietaryModal from "./DietaryModal";
import { useTranslation } from "react-i18next";

function VMMenu() {
  const { t } = useTranslation();
  const [menuData, setMenuData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [locationModalOpen, setLocationModalOpen] = useState(false);
  const [locationData, setLocationData] = useState([]);
  const [selectedMachineId, setSelectedMachineId] = useState(null);

  const [dietaryModalOpen, setDietaryModalOpen] = useState(false);
  const [selectedTags, setSelectedTags] = useState([]);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  /** Static tags */
  const tags = useMemo(
    () => [
      { IconComponent: VegetarianIcon, label: "Vegetarian" },
      { IconComponent: VeganIcon, label: "Vegan" },
      { IconComponent: FishIcon, label: "Fish-Free" },
      { IconComponent: GlutenIcon, label: "Gluten-Free" },
      { IconComponent: LactoseIcon, label: "Lactose-Free" },
      { IconComponent: ProteinIcon, label: "High Protein" },
    ],
    []
  );

  /** Memoized slot list (prevents recomputation on every render) */
  const allSlots = useMemo(
    () => menuData.flatMap((aisle) => aisle.slotItems || []),
    [menuData]
  );

  /** Visible items logic */
  const itemsPerRow = isSmallScreen ? 1 : 4;
  const [visibleCount, setVisibleCount] = useState(itemsPerRow * 4);

  const visibleSlots = useMemo(
    () => allSlots.slice(0, visibleCount),
    [allSlots, visibleCount]
  );

  /** Fetch locations ONCE on mount */
  useEffect(() => {
    axios
      .get("https://api.naf-cloudsystem.de/api/NAFWebsite/franchise/first/locations")
      .then((res) => {
        const locations = res.data;
        setLocationData(locations);

        if (locations?.[0]?.machines?.[0]) {
          setSelectedMachineId(locations[0].machines[0].id);
        }
      })
      .catch(() => setError("Failed to load locations"));
  }, []);

  /** Fetch menu (memoized to avoid re-renders) */
  const fetchMenu = useCallback(async () => {
    if (!selectedMachineId) return;

    try {
      setLoading(true);
      setError(null);

      const query = selectedTags.length ? `?tags=${selectedTags.join(",")}` : "";

      const response = await axios.get(
        `https://api.naf-cloudsystem.de/api/NAFWebsite/${selectedMachineId}/all${query}`
      );

      setMenuData(response.data);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch slot data");
    } finally {
      setLoading(false);
    }
  }, [selectedMachineId, selectedTags]);

  /** Re-fetch menu when machine or tags change */
  useEffect(() => {
    fetchMenu();
  }, [fetchMenu]);

  /** Reset visible count when machine changes */
  useEffect(() => {
    setVisibleCount(itemsPerRow * 4);
  }, [itemsPerRow, selectedMachineId]);

  /** UI Loading State */
  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "150px",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) return <div>{error}</div>;

  return (
    <Box className="section-container slot-menu-container">
      {/* Intro Text */}
      <Typography className="bodyRegularText3" sx={{ color: "#C2C2C4" }}>
        {t("menu.menuheroSubtitle2")}
      </Typography>

      {/* Filter Buttons */}
      <Box
        className="slot-container-sec"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          gap: 2,
          alignItems: { xs: "flex-start", md: "center" },
          my: { xs: 2, md: 4 },
        }}
      >
        <Button
          variant="contained"
          onClick={() => setLocationModalOpen(true)}
          sx={{
            backgroundColor: "#262626",
            border: "1px solid #525252",
            borderRadius: "12px",
            padding: { xs: "14px", md: "24px" },
            textTransform: "none",
          }}
          endIcon={<MapIcon />}
        >
          <Typography variant="h6" color="#FCFCFC" className="bodyRegularText3">
            {t("menu.SelectMachineLocation")}
          </Typography>
        </Button>

        <Button
          variant="contained"
          onClick={() => setDietaryModalOpen(true)}
          sx={{
            backgroundColor: "#262626",
            border: "1px solid #525252",
            borderRadius: "12px",
            padding: { xs: "14px", md: "24px" },
            textTransform: "none",
          }}
          endIcon={<DietaryIcon />}
        >
          <Typography variant="h6" color="#FCFCFC" className="bodyRegularText3">
            {t("menu.DietaryPreferences")}
          </Typography>
        </Button>
      </Box>

      {/* Slot Items */}
      <Grid container spacing={3}>
        {visibleSlots.map((slot) => (
          <Grid item xs={12} sm={6} md={3} key={slot.slotId}>
            <SlotCard slot={slot} tags={tags} />
          </Grid>
        ))}
      </Grid>

      {/* View More / Less */}
      {allSlots.length > itemsPerRow * 4 && (
        <Box mt={3} textAlign="center">
          {visibleCount < allSlots.length ? (
            <Button
              sx={{
                color: "#FCFCFC",
                textDecoration: "underline",
                textTransform: "none",
              }}
              onClick={() => setVisibleCount((prev) => prev + itemsPerRow * 2)}
            >
              {t("menu.ViewMore")}
            </Button>
          ) : (
            <Button
              sx={{
                color: "#FCFCFC",
                textDecoration: "underline",
                textTransform: "none",
              }}
              onClick={() => setVisibleCount(itemsPerRow * 4)}
            >
              {t("menu.Viewless")}
            </Button>
          )}
        </Box>
      )}

      {/* Location Modal */}
      <LocationModal
        open={locationModalOpen}
        onClose={() => setLocationModalOpen(false)}
        locations={locationData}
        selected={selectedMachineId}
        onSelect={(machineId) => {
          setSelectedMachineId(machineId);
          setLocationModalOpen(false);
        }}
      />

      {/* Dietary Modal */}
      <DietaryModal
        open={dietaryModalOpen}
        onClose={() => setDietaryModalOpen(false)}
        selected={selectedTags}
        onApply={(tags) => setSelectedTags(tags)}
        tags={tags}
      />
    </Box>
  );
}

export default VMMenu;
