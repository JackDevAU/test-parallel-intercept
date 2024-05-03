"use client";
import { useMediaQuery } from "@/hooks/use-media-query";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { createPortal } from "react-dom";

type ProjectDisplayProps = {
  Content: any;
  project: {
    title: string;
    abstract: string;
  };
};

export default function ProjectDialog({
  Content,
  project,
}: ProjectDisplayProps) {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [open, setOpen] = React.useState(true);
  const { back } = useRouter();

console.log('❌ THIS IS CALLED?');


  const onOpenChange = () => {
    setOpen(!open);
    back();
  };

  if (isDesktop) {
      return createPortal(
        <Dialog open={open} onOpenChange={onOpenChange}>
          <DialogContent className="overflow-y-auto max-h-[40rem]">
            <DialogHeader>
              <DialogTitle>{project.title}</DialogTitle>
              <DialogDescription>{project.abstract}</DialogDescription>
            </DialogHeader>
            {Content}
          </DialogContent>
        </Dialog>,
        document.getElementById("modal-root")!
      );
  }

    return createPortal(
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerContent>
          <DrawerHeader className="text-left">
            <DrawerTitle>{project.title}</DrawerTitle>
            <DrawerDescription>{project.abstract}</DrawerDescription>
          </DrawerHeader>
          <div className="px-4">{Content}</div>

          <DrawerFooter className="pt-2">
            <DrawerClose asChild>
              <Button variant="outline">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>,
      document.getElementById("modal-root")!
    );
}
