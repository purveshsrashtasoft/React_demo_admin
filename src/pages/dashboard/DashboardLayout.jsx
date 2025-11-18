// DashboardPage.jsx
import React from "react";
import LayoutHOC from "../HOC/WithLayout";

const DashboardPage = () => {
  return (
    <>
      {/* Top Section */}
      <div className="header">
        <div className="bg-primary p-6 rounded-lg">
          <div className="flex justify-between items-center">
            <h4 className="text-2xl font-bold text-foreground">Dashboard</h4>

            <div className="flex gap-4">

              <div className="bg-white border b-color rounded px-4 py-2 inline-block">
                <span className="text-black font-medium">REGISTERED USER - XXXXXXXXX</span>
              </div>

              <div className="bg-white border b-color rounded px-4 py-2 inline-block">
                <span className="text-black font-medium">
                  SUBSCRIBER - XXXXXXXXX
                </span>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Life Declaration */}
      <div className="section-box">
        <div className="section-title">Life Declaration</div>
        <div className="single-box">
          <div className="text-sm text-muted-foreground mb-1">Pending</div>
          <div className="value text-3xl font-bold text-foreground">0</div>
        </div>
      </div>

      {/* Demise */}
      <div className="section-box">
        <div className="section-title">Demise</div>

        <div className="row-box-1">
          <div className="single-box">
            <div className="text-sm text-muted-foreground mb-1">Confirmed</div>
            <div className="value text-3xl font-bold text-foreground">0</div>
          </div>

          <div className="single-box">
            <div className="text-sm text-muted-foreground mb-1">Unconfirmed</div>
            <div className="value text-3xl font-bold text-foreground">0</div>
          </div>
        </div>
      </div>

      {/* Death Certificate */}
      <div className="section-box">
        <div className="section-title">Death Certificate</div>

        <div className="row-box-1">
          <div className="single-box">
            <div className="text-sm text-muted-foreground mb-1">Received</div>
            <div className="value text-3xl font-bold text-foreground">0</div>
          </div>

          <div className="single-box">
            <div className="text-sm text-muted-foreground mb-1">Pending</div>
            <div className="value text-3xl font-bold text-foreground">0</div>
          </div>
        </div>
      </div>

      {/* DC Status */}
      <div className="section-box">
        <div className="section-title">DC Status</div>

        <div className="row-box-3">
          <div className="single-box">
            <div className="text-sm text-muted-foreground mb-1">Valid</div>
            <div className="value text-3xl font-bold text-foreground">0</div>
          </div>

          <div className="single-box">
            <div className="text-sm text-muted-foreground mb-1">Invalid</div>
            <div className="value text-3xl font-bold text-foreground">0</div>
          </div>

          <div className="single-box">
            <div className="text-sm text-muted-foreground mb-1">Pending</div>
            <div className="value text-3xl font-bold text-foreground">0</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LayoutHOC(DashboardPage);
