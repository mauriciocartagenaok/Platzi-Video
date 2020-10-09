import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getVideoSource } from "../actions";
import NotFound from "./NotFound";
import "../asset/styles/components/Player.scss";

const Player = (props) => {
  const { id } = props.match.params;
  const hasPlaying = Object.keys(props.playing).length > 0;

  console.log(props.playing)

  useEffect(() => {
    props.getVideoSource(id);
  }, [id]);

  return hasPlaying ? (
    <div className="Player">
      <video controls autoPlay>
        <source src={props.playing.source} type="video/mp4"></source>
      </video>
      <div className="Player-back">
        <button type="button" onClick={() => props.history.goBack()}>
          Regresar
        </button>
      </div>
    </div>
  ) : (
    <NotFound></NotFound>
  );
};
const mapStateToProps = (state) => {
  return {
    playing: state.playing,
  };
};

const mapDispatchToProps = {
  getVideoSource,
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
