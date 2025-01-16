import NIcon from "@/assets/icons/N.png";
import u1 from "@/assets/icons/u1.png";
import community from "@/assets/icons/community.png";

const Nu1 = () => {
  return (
    <div>
      <div className="df">
        <img src={NIcon} alt="N" style={{ objectFit: "contain" }} />
        <img
          src={u1}
          alt="ui icon"
          style={{ objectFit: "contain", transform: "translateY(40px)" }}
        />
      </div>
      <div className="df jcc">
        <img src={community} alt="bhf" />
      </div>
    </div>
  );
};

export default Nu1;
