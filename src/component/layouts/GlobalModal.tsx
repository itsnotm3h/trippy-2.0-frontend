import { useModalStore } from "@/store/useModalStore";
import { Cancel} from "@mui/icons-material";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Stack,
  Typography,
} from "@mui/material";

export const GlobalModal = () => {
  const { isModalOpen, modalSetting, closeModal } = useModalStore();

  return (
    <Dialog
      open={isModalOpen}
      onClose={closeModal}
      maxWidth={modalSetting.size}
      fullWidth
    >
      <DialogTitle>
        <Stack direction={"row"}>
          <Typography variant="h3">{modalSetting.title}</Typography>
          <Cancel sx={{ ml: "auto" }} onClick={() => closeModal()} />
        </Stack>
      </DialogTitle>
      <DialogContent>{modalSetting.content}</DialogContent>
    </Dialog>
  );
};
